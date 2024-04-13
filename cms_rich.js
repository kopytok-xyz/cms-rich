const richCmsConstrucorWrapper_el = document.querySelector(
	'[rcms-section-wrapper]'
)
if (richCmsConstrucorWrapper_el) {
	const t = document.querySelector('body'),
		n = document.createElement('a')
	;(n.textContent = 'made by kopytok.xyz'),
		n.classList.add('label-kopytok'),
		(n.href = 'https://kopytok.xyz'),
		n.setAttribute('target', '_blank')
	const e = document.createElement('h6')
	e.classList.add('gif-phrase'), (e.textContent = 'COPIED🎉')
	const o = document.createElement('div')
	o.classList.add('gif-wrapper')
	const i = document.createElement('img')
	i.classList.add('cat-gif'),
		(i.src =
			'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmVxenYxMzJwbGFzMHU5eWszbDVpcGdjY2NtdTJ4cGg5eXhtbzdkZyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/Dg4TxjYikCpiGd7tYs/giphy.gif'),
		t.appendChild(o),
		o.appendChild(i),
		o.appendChild(e),
		o.appendChild(n)
	const a = document.querySelectorAll('[rcms-section]'),
		r = []
	a.forEach((t, n) => {
		const e = t,
			o = document.createElement('div'),
			i = document.createElement('button')
		i.classList.add('cms-rich-button', 'object-clone-btn'),
			(i.textContent = 'Copy this section'),
			o.appendChild(i),
			o.classList.add('rcms-wrapper'),
			e.parentNode.insertBefore(o, e),
			o.appendChild(e)
		const a = [
			{
				_id: '',
				type: 'RichText',
				tag: 'div',
				classes: [],
				children: [''],
				data: { rich: !0, tag: 'div' },
			},
			{
				_id: '',
				type: 'HtmlEmbed',
				tag: 'div',
				classes: [],
				children: [],
				v: '',
				data: {
					embed: {
						type: 'html',
						meta: { html: t.outerHTML, div: !1, iframe: !1, script: !1 },
					},
					insideRTE: !0,
				},
			},
		]
		r.push(a)
	}),
		document.querySelectorAll('.object-clone-btn').forEach((t, n) => {
			t.addEventListener('click', t => {
				o.classList.add('cat-gif--copied'),
					setTimeout(function () {
						o.classList.remove('cat-gif--copied')
					}, 4500),
					t.preventDefault(),
					document.addEventListener(
						'copy',
						t => {
							const e = JSON.stringify(r[n])
							t.clipboardData
								? t.clipboardData.setData('application/json', e)
								: window.clipboardData &&
								  window.clipboardData.setData('application/json', e),
								t.preventDefault()
						},
						!0
					),
					document.execCommand('copy')
			})
		})
	let s = document.createElement('style')
	document.head.appendChild(s),
		(s.innerHTML =
			"\n.cms-rich-button {\n\tdisplay: inline;\n\tpadding: 0.6rem 1.5rem;\n\tbottom: 8px;\n\tright: 8px;\n\tposition: absolute;\n\tbackground: linear-gradient(270deg, #5190fa, #5190fa);\n\tcolor: white;\n\tfont-weight: bold;\n\tletter-spacing: 0.6px;\n\tbackground-size: 400% 400%;\n\tanimation: gradientAnimation 7s ease infinite;\n\ttransition: all 0.3s ease;\n\tborder: none;\n\tcursor: pointer;\n\tbox-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.cms-rich-button:hover {\n\ttransform: translateY(-1px);\n\tbox-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n}\n\n@keyframes gradientAnimation {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n\n.rcms-wrapper {\n\tborder: 3px solid #d6d6d6;\n\tmargin: 100px 16px;\n}\n\n.gif-wrapper {\n\ttransition: all 0.5s;\n\tdisplay: block;\n\tposition: fixed;\n\tobject-fit: cover;\n\tbottom: -400px;\n\tleft: -400px;\n\twidth: 120px;\n\theight: 120px;\n\tborder-radius: 100%;\n\toverflow: hidden;\n}\n\n.cat-gif--copied {\n\tbottom: 32px;\n\tleft: 32px;\n}\n\n.cat-gif {\n\tdisplay: block;\n\tposition: absolute;\n\tobject-fit: cover;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.gif-phrase {\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tletter-spacing: 0.5px;\n\tcolor: white;\n\ttext-shadow: black;\n\tposition: absolute;\n\tbottom: 40px;\n\tleft: 0px;\n\tright: 0px;\n\ttext-align: center;\n\tdisplay: block;\n}\n\n.label-kopytok {\n\tfont-size: 12px;\n\tfont-weight: bold;\n\tcolor: black;\n\tposition: fixed;\n\tbottom: 16px;\n\tright: 32px;\n\tdisplay: block;\n\tpadding: 0.4rem 1.1rem;\n\tbackground-color: white;\n\ttext-decoration: none;\n\tcursor: pointer;\n\tborder: 3px solid #d6d6d6;\n\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n\t\tOxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n\ttransition: all 0.3s ease;\n}\n\n.label-kopytok:hover {\n\ttransform: translateY(-1px);\n\tbox-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n}\n\n")
}
