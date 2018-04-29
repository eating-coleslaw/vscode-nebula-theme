export const isMoreRecentVersion = (checkVersion: string, compareVersion?: string): boolean => {
	if (!compareVersion) { return true; }
	return compareSemanticVersions(
		convertToSemanticVersion(checkVersion),
		convertToSemanticVersion(compareVersion)
	);
};

const compareSemanticVersions = (check: SemanticVersion, compare?: SemanticVersion): boolean => {
	if (check.major !== compare.major) {
		return check.major > compare.major ? true: false;
	}
	
	else if (check.minor !== compare.minor) {
		return check.minor > compare.minor ? true : false;
	}

	else if (check.patch !== check.patch) {
		return check.patch > compare.patch ? true : false;
	}

	else {
		return false;
	}
};

export const isSameVersion = (checkVersion: string, compareVersion?: string): boolean => {
	if (!compareVersion) { return false; }
	return isSameSemanticVersion(
		convertToSemanticVersion(checkVersion),
		convertToSemanticVersion(compareVersion)
	);
};

const isSameSemanticVersion = (check: SemanticVersion, compare: SemanticVersion): boolean => {
	return check.full === compare.full;
};

export const convertToSemanticVersion = (version: string): SemanticVersion => {
    let versionSplit: any[] = version.split('.',3);
    versionSplit.forEach(index => {
        versionSplit[index] = Number(versionSplit[index]);
    });

    const versionObj: SemanticVersion = {
        major: versionSplit[0],
        minor: versionSplit[1],
		patch: versionSplit[2],
		full: String('').concat(versionSplit[0],'.',versionSplit[1],'.',versionSplit[2])
    };

    return versionObj;
};

export const maxNonConfigVersion: SemanticVersion = {
    full: "1.0.5",
    major: 1,
    minor: 0,
    patch: 5
};

export interface SemanticVersion {
    full: string;
    major: number;
    minor: number;
    patch: number;
}