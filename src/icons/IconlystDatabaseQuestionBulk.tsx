import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseQuestionBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M5.641 13.809c.79.34 1.6.55 2.43.71.81.16 1.62.25 2.44.3.705.037 1.4.04 2.096.008a.205.205 0 0 0 .19-.17c.389-2.162 2.29-3.818 4.554-3.818.734 0 1.431.174 2.049.48.14.07.31-.03.309-.185-.006-.898-.007-2.032-.008-2.6 0-.156-.17-.25-.305-.17q-.102.06-.205.114c-1.29.74-2.69 1.07-4.12 1.29-.66.1-1.34.16-2.01.21-1.29.09-2.59.05-3.88-.1-.94-.11-1.86-.28-2.77-.53-.73-.21-1.43-.46-2.09-.84q-.124-.076-.25-.154a.196.196 0 0 0-.3.167c0 .722-.002 2.367-.01 3.247 0 .44.14.79.42 1.08.42.45.93.72 1.46.96M14.631 18.688c0-.2.017-.389.041-.57a.22.22 0 0 0-.156-.237 2.5 2.5 0 0 1-1.463-1.165.21.21 0 0 0-.195-.11q-.683.036-1.367.022c-.87-.01-1.74-.05-2.61-.18-.73-.11-1.47-.25-2.19-.42-.85-.2-1.68-.5-2.45-.96l-.158-.095a.204.204 0 0 0-.31.172c.001.723.004 2.33-.012 3.203-.01.52.19.91.54 1.23.4.38.87.63 1.36.83.87.37 1.78.6 2.7.76.88.15 1.76.23 2.64.26a20.5 20.5 0 0 0 3.461-.161.21.21 0 0 0 .176-.228 2.427 2.427 0 0 1 .208-1.21.22.22 0 0 0 .002-.182 2.5 2.5 0 0 1-.217-.959" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.281 6.368c.458.438 1.003.71 1.568.937 1.019.409 2.078.633 3.152.778.906.122 1.817.184 2.552.173 1.714.002 3.234-.142 4.731-.52.745-.188 1.474-.433 2.156-.82.375-.212.725-.461.996-.823.358-.48.364-1.04-.001-1.512a2.7 2.7 0 0 0-.424-.44c-.581-.474-1.25-.75-1.937-.978-1.224-.405-2.482-.605-3.754-.695-1.736-.124-3.465-.061-5.183.259-.933.173-1.848.416-2.719.827-.465.219-.908.48-1.264.882-.296.334-.47.715-.345 1.192.079.304.26.537.472.74M17.354 12.593a2.89 2.89 0 0 0-2.884 2.89.75.75 0 0 0 1.5 0c0-.78.608-1.39 1.384-1.39a1.39 1.39 0 0 1 1.385 1.39c0 .17 0 .681-.726 1.081l-.125.07c-.567.322-1.516.857-1.502 2.038a.75.75 0 0 0 .75.74h.01a.75.75 0 0 0 .74-.758c-.003-.25.191-.404.74-.712l.122-.072c.961-.527 1.491-1.375 1.491-2.387a2.89 2.89 0 0 0-2.885-2.89M17.136 20.078a.763.763 0 0 0-.75.765.75.75 0 0 0 1.5 0v-.03a.74.74 0 0 0-.75-.735"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseQuestionBulk;
