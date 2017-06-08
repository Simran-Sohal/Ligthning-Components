/** 
 * Copyright (c) 2017 Simranjeet Singh
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 **/
({
	getUIComponentType : function(fieldType) {
        var uiComponentType = "ui:outputText";
        
        if (fieldType == "BOOLEAN" || fieldType == ""){
            uiComponentType = "ui:outputCheckbox";
        } 
        else if (fieldType == "CURRENCY"){
            uiComponentType = "ui:outputCurrency";
        } 
        else if (fieldType == "DATE"){
            uiComponentType = "ui:outputDate";
        }
        else if (fieldType == "DATETIME"){
            uiComponentType = "ui:outputDateTime";
        }
        else if (fieldType == "DOUBLE"){
            uiComponentType = "ui:outputNumber";
        } 
        else if (fieldType == "EMAIL"){
            uiComponentType = "ui:outputEmail";
        } 
        else if (fieldType == "INTEGER"){
            uiComponentType = "ui:outputNumber";
        } 
        else if (fieldType == "PERCENT"){
            uiComponentType = "ui:outputNumber";
        } 
        else if (fieldType == "PHONE"){
            uiComponentType = "ui:outputPhone";
        } 
        else if (fieldType == "TEXTAREA"){
            uiComponentType = "ui:outputTextArea";
        } 
        else if (fieldType == "URL"){
            uiComponentType = "ui:outputURL";
        } 
        else {
            uiComponentType = "ui:outputText";
        }
        
        return uiComponentType;
	}
})
