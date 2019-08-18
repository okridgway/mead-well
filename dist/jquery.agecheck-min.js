!function(e){e.ageCheck=function(t){const r=e.extend({minAge:21,redirectTo:"index.html",redirectOnFail:"index.html",title:"Age Verification",copy:"You must be at least 21 years old to enter. Please enter your date of birth to continue.",success:null,successMsg:{header:"Success!",body:"Letting you into the site..."},underAgeMsg:"We're sorry, you are not old enough to view this site...",underAge:null,errorMsg:{invalidDay:"Day is invalid or empty",invalidYear:"Year is invalid or empty"},storage:"sessionStorage",storageExpires:null},t);var a=window[r.storage];const o={month:"",day:"",year:"",age:"",errors:[],setValues(){const t=e(".ac-container .month").val(),r=e(".ac-container .day").val();o.month=t,o.day=r.replace(/^0+/,""),o.year=e(".ac-container .year").val()},validate:()=>(o.errors=[],!1===/^([0-9]|[12]\d|3[0-1])$/.test(o.day)&&o.errors.push(r.errorMsg.invalidDay),!1===/^(19|20)\d{2}$/.test(o.year)&&o.errors.push(r.errorMsg.invalidYear),o.clearErrors(),o.displayErrors(),o.errors.length<1),clearErrors(){e(".errors").html("")},displayErrors(){let t="<ul>";for(let e=0;e<o.errors.length;e++)t+=`<li><span>x</span>${o.errors[e]}</li>`;t+="</ul>",setTimeout(()=>{e(".ac-container .errors").html(t)},200)},reCenter(t){t.css("top",`${Math.max(0,(e(window).height()-(t.outerHeight()+150))/2)}px`),t.css("left",`${Math.max(0,(e(window).width()-t.outerWidth())/2)}px`)},buildHtml(){const t=r.copy,a=["January","February","March","April","May","June","July","August","September","October","November","December"];let n="";n+='<div class="ac-overlay"></div>',n+='<div class="ac-container">',n+=`<h2>${r.title}</h2>`,n+=`<p>${t.replace("[21]",`<strong>${r.minAge}</strong>`)}`+"</p>",n+='<div class="errors"></div>',n+='<div class="fields"><select class="month">';for(let e=0;e<a.length;e++)n+=`<option value="${e}">${a[e]}</option>`;n+="</select>",n+='<input class="day" maxlength="2" placeholder="01" />',n+='<input class="year" maxlength="4" placeholder="1989"/>',n+="<button>Submit</button></div></div>",e("body").append(n),e(".ac-overlay").animate({opacity:.8},500,()=>{o.reCenter(e(".ac-container")),e(".ac-container").css({opacity:1})}),e(".ac-container .day, .ac-container .year").focus(function(){e(this).removeAttr("placeholder")})},setAge(){o.age="";const e=new Date(o.year,o.month,o.day),t=Date.now()-e.getTime(),r=new Date(t);o.age=Math.abs(r.getUTCFullYear()-1970)},getStorage:()=>"cookie"===r.storage?document.cookie.split(";").filter(e=>e.trim().startsWith("ageVerified=")).length:"true"===a.getItem("ageVerified"),setStorage(e,t,o){try{if("cookie"===r.storage){if(o){let e=new Date;e.setTime(e.getTime()+24*o*60*60*1e3),o=e.toGMTString()}document.cookie="ageVerified=true; expires="+o+";"}else a.setItem(e,t);return!0}catch(e){return!1}},handleSuccess(){const t=`<h3>${r.successMsg.header}</h3><p>${r.successMsg.body}</p>`;e(".ac-container").html(t),setTimeout(()=>{e(".ac-container").animate({top:"-350px"},200,()=>{e(".ac-overlay").animate({opacity:"0"},500,()=>{""!==r.redirectTo?window.location.replace(r.redirectTo):(e(".ac-overlay, .ac-container").remove(),r.success&&r.success())})})},2e3)},handleUnderAge(){const t=`<h3>${r.underAgeMsg}</h3>`;e(".ac-container").html(t),""!==r.redirectOnFail&&setTimeout(()=>{window.location.replace(r.redirectOnFail)},2e3),r.underAge&&r.underAge()}};if(o.getStorage())return!1;o.buildHtml(),e(".ac-container button").on("click",()=>{o.setValues(),!0===o.validate()&&(o.setAge(),o.age>=r.minAge?(o.setStorage("ageVerified","true",r.storageExpires)||console.log(r.storage+" not supported by your browser"),o.handleSuccess()):o.handleUnderAge())}),e(window).resize(()=>{o.reCenter(e(".ac-container")),setTimeout(()=>{o.reCenter(e(".ac-container"))},500)})}}(jQuery);