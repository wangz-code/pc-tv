/**
 *
 * @param htmlContent  html字符
 * @returns string[]
 */
export const getNginxHref = (htmlContent: string): string[] => {
  // 匹配<a>标签内内容的正则表达式（排除'..'）
  const aContentRegex = /<a href="((?!\.\.).*?)">(.*?)<\/a>/g;

  // 用于存放提取到的<a>标签内内容的数组
  const aContentArray = [];

  let match;

  while ((match = aContentRegex.exec(htmlContent)) !== null) {
    const href = match[1];
    const textContent = match[2].replace("/", ""); // 去除斜杠字符
    if (href !== "../") {
      aContentArray.push(textContent);
    }
  }

  return aContentArray;
};
