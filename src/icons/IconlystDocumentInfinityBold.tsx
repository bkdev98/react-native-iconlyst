import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentInfinityBold = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.138 13.798H7.49a.75.75 0 1 1 0-1.5h1.647a.75.75 0 0 1 0 1.5M7.49 7.935h4.038a.75.75 0 0 1 0 1.5H7.49a.75.75 0 1 1 0-1.5m7.813 8.069c.123.1.302.1.426 0a3.87 3.87 0 0 1 3.076-.806c.194.031.382-.112.382-.309V6.901a4.556 4.556 0 0 0-4.552-4.551h-6.9A4.555 4.555 0 0 0 3.185 6.9V16.5a4.555 4.555 0 0 0 4.55 4.55h1.282c.235 0 .382-.26.288-.474a3.88 3.88 0 0 1 .799-4.304 3.895 3.895 0 0 1 5.2-.268"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.986 19.82a1.14 1.14 0 0 1-1.605 0l-.803-.804.803-.802a1.135 1.135 0 0 1 1.604 1.605m-5.331 0a1.14 1.14 0 0 1-1.605 0 1.14 1.14 0 0 1-.002-1.605 1.13 1.13 0 0 1 1.607 0l.803.801zm6.392-2.667a2.64 2.64 0 0 0-3.727 0l-.803.803-.803-.803a2.64 2.64 0 0 0-3.726 0 2.643 2.643 0 0 0 .002 3.728 2.64 2.64 0 0 0 3.724 0l.803-.804.803.803c.514.513 1.186.77 1.861.77s1.351-.257 1.866-.77a2.643 2.643 0 0 0 0-3.727"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentInfinityBold;
