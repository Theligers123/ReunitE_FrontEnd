const basePath = 'https://green-talent-332002.uc.r.appspot.com/';

export default function path(extension) {
	return basePath + (extension ? extension : '');
}
