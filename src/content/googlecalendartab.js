/* ***** BEGIN LICENSE BLOCK *****
 *   Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Google Calendar Tab.
 *
 * The Initial Developer of the Original Code is
 * Bryan Clark.
 * Portions created by the Initial Developer are Copyright (C) 2009
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

// "use strict";

var googlecalendartab = {
    EXT_ID : "googlecalendartab@momo",
    EXT_PREF : function(pref) { return "extensions." + this.EXT_ID + "." + pref; },
    DEFAULT_URL : "https://www.google.com/calendar/",
    onLoad: function (evt) {
        // initialization code
        if (this.initialized) {
            return;
        }
        this.initialized = true;
        this.strings = document.getElementById("googlecalendartab-strings");
        this.tabType = "contentTab";
    },
    getOptions: function () {
        // Grab a default URL value here just in case
        var url = Application.prefs.getValue(this.EXT_PREF("url"), googlecalendartab.DEFAULT_URL);
        this.regexp = new RegExp("^" + url);
        return { "background"   : false,
                 "clickHandler" : "specialTabs.siteClickHandler(event, googlecalendartab.regexp);",
                 "contentPage"  :  url};
    },
    onMenuItemCommand: function (evt) {
        document.getElementById('tabmail').openTab(this.tabType, googlecalendartab.getOptions());
    },
    openCalendarTab: function (evt) {
        document.getElementById('tabmail').openTab(this.tabType, googlecalendartab.getOptions());
    },
    preferences : {
        init : function () {
            var urlPref = Application.prefs.getValue(googlecalendartab.EXT_PREF("url"), null);
            if (urlPref && urlPref != googlecalendartab.DEFAULT_URL) {
                this.enableOtherURL();
                document.getElementById("googlecalendartab_radiogroup").selectedItem =
                  document.getElementById("googlecalendartab_other_url_radio");
            }
            else {
                this.disableOtherURL();
                document.getElementById("googlecalendartab_radiogroup").selectedItem =
                  document.getElementById("googlecalendartab_default_url_radio");
            }
        },
        resetUrl : function() {
            // Just ignore the broken reset() code
            // https://bugzilla.mozilla.org/show_bug.cgi?id=481044
            Application.prefs.setValue(googlecalendartab.EXT_PREF("url"), googlecalendartab.DEFAULT_URL);
        },
        enableOtherURL : function () {
            document.getElementById('googlecalendartab_other_url_label').disabled = false;
            document.getElementById('googlecalendartab_other_url_entry').disabled = false;
        },
        disableOtherURL : function () {
            document.getElementById('googlecalendartab_other_url_label').disabled = true;
            document.getElementById('googlecalendartab_other_url_entry').disabled = true;
            /* This needs to be called here because the entry is bound to the pref otherwise */
            this.resetUrl();
        }
    }
};
window.addEventListener("load", function (evt) { googlecalendartab.onLoad(evt); }, false);
