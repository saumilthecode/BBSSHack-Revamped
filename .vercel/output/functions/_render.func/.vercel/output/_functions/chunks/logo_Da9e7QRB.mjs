const KittyAstronaut = new Proxy({"src":"/_astro/logo.BqLKYfOs.webp","width":1925,"height":1925,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/public/logo.webp";
							}
							
							return target[name];
						}
					});

export { KittyAstronaut as K };
