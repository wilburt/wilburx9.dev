function processImages(t){var o=document.querySelectorAll(".kg-image-card img"),n=getMinAspectRatio();for(let e=0;e<o.length;e++){var i=o[e],l="lightbox__photo__"+e,a=document.createElement("div"),c=(a.style.backgroundImage=`url("${i.currentSrc||i.src}")`,a.classList.add("group"),Number(i.getAttribute("width"))),r=Number(i.getAttribute("height")),s=c+"/"+r,d=(a.style.aspectRatio=Math.max(c/r,n).toString(),i.style.aspectRatio=c+"/"+r,a.style.maxHeight=r+"px",i.style.maxWidth=c+"px",i.style.maxHeight=r+"px",i.parentElement);d.insertBefore(a,i.parentElement.firstChild),a.append(i),"photography"===t&&(a.insertAdjacentHTML("afterbegin",`<span onclick='showLightBox("${l}");' class='photo-zoom-handle'><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="m19 19-4.35-4.35M9 6v6M6 9h6m5 0A8 8 0 1 1 1 9a8 8 0 0 1 16 0Z"/></svg></span>`),d.insertAdjacentHTML("beforebegin",`<div class='photo-lightbox' id='${l}'><div class="group" style="${getZoomImgWrapperStyle(c,r)}"><span onclick='closeLightBox("${l}");' class='photo-zoom-handle'><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="m19 19-4.35-4.35M6 9h6m5 0A8 8 0 1 1 1 9a8 8 0 0 1 16 0Z"/></svg></span><img src="${i.src}" alt="${i.alt}" style="aspect-ratio: ${s}"/></div></div>`))}}function closeLightBox(e){document.getElementById(e).style.display="none",document.body.style.overflowY="auto",document.body.style.overflowX=null}function showLightBox(e){document.getElementById(e).style.display="flex",document.body.style.overflowY="hidden",document.body.style.overflowX="unset"}function copyCode(e){var t=e.parentElement.parentElement.getElementsByTagName("code")[0];copy(e,t.innerText||t.textContent)}function copy(e,t,o){"hide"===e.children[0].className&&navigator.clipboard.writeText(t).then(function(){e.children[0].classList.toggle("hide"),e.children[1].classList.toggle("hide"),"function"==typeof o&&o(),setTimeout(()=>{e.children[0].classList.toggle("hide"),e.children[1].classList.toggle("hide"),"function"==typeof o&&o()},2e3)})}function getMinAspectRatio(){return 768<$(window).width()?1.5:.6}function getZoomImgWrapperStyle(e,t){var o=Math.min(e,$(window).width()),n=Math.min(t,$(window).height());let i=`aspect-ratio: ${e/t}; `;return i+=o<n?`height: auto; max-height: 100%; width: ${o}px;`:`width: auto; max-width: 100%; height: ${n}px;`}!function(){var e=document.querySelector(".gh-post-content"),t=e.querySelector(":scope > figure.kg-bookmark-card");null!=t&&1===e.children.length&&null!=(e=t.querySelector("a.kg-bookmark-container").href)&&window.location.replace(e)}(),function(){var t=document.querySelectorAll('code[class*="language-"]');for(let e=0;e<t.length;e++){var o=t[e].parentElement;"pre"===o.tagName.toLowerCase()&&o.insertAdjacentHTML("afterbegin",`<div class="code-copy"><div><span class="hide" id="copied"><span>Copied</span><svg class="fill-greenSet dark:fill-greenSet-dark" width="20" height="20" stroke="none" fill="none"><circle cx="10" cy="10" r="10"/><g clip-path="url(#a)"><path fill="#fff" d="M8.438 12.188 6.25 10l-.73.73 2.918 2.916 6.25-6.25-.73-.73-5.52 5.521Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M3.75 3.75h12.5v12.5H3.75z"/></clipPath></defs></svg></span><span id="copy" onclick='copyCode(this.parentElement)'><span>Copy</span><svg width="22" height="22" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M9.5 1.003c-.675.009-1.08.048-1.408.215a2 2 0 0 0-.874.874c-.167.328-.206.733-.215 1.408M18.5 1.003c.675.009 1.08.048 1.408.215a2 2 0 0 1 .874.874c.167.328.206.733.215 1.408m0 9c-.009.675-.048 1.08-.215 1.408a2 2 0 0 1-.874.874c-.328.167-.733.206-1.408.215M21 7v2m-8-8h2M4.2 21h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C15 19.48 15 18.92 15 17.8v-7.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C13.48 7 12.92 7 11.8 7H4.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C1 8.52 1 9.08 1 10.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C2.52 21 3.08 21 4.2 21Z"/></svg></span></div></div>`)}}(),document.getElementById("back_icon").parentElement.href=window.location.origin+"/blog",document.getElementById("post-link-copy").addEventListener("click",e=>{let t=e.currentTarget;copy(t,window.location.href,()=>{t.classList.toggle("copied")})});
//# sourceMappingURL=post.js.map