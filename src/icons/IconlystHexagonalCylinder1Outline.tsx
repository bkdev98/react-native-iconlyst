import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonalCylinder1Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.703 2.73c.446-.313.978-.48 1.52-.48h4.053c.543 0 1.074.167 1.52.48l3.198 2.239a2.65 2.65 0 0 1 1.13 2.17v9.722c0 .864-.422 1.675-1.13 2.17l-3.198 2.24h-.001c-.445.31-.974.479-1.519.479h-4.052a2.65 2.65 0 0 1-1.52-.48l-3.198-2.238a2.65 2.65 0 0 1-1.131-2.171V7.139c0-.864.421-1.675 1.13-2.17zm1.52 1.02c-.236 0-.466.073-.658.208l-3.2 2.24a1.15 1.15 0 0 0-.49.941v9.722c0 .375.183.727.49.941l3.199 2.24c.194.135.425.208.66.208h4.052c.234 0 .464-.072.66-.209l3.198-2.238c.307-.215.49-.568.49-.942V7.139a1.15 1.15 0 0 0-.49-.942l-3.199-2.239a1.15 1.15 0 0 0-.659-.208z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.48 14.579A2.65 2.65 0 0 1 10 14.1h4.502c.543 0 1.073.167 1.518.477l.002.001 3.586 2.51a.75.75 0 0 1-.86 1.23l-3.586-2.51a1.16 1.16 0 0 0-.66-.208H10a1.15 1.15 0 0 0-.66.207l-3.586 2.51a.75.75 0 0 1-.86-1.228zM19.791 5.867a.75.75 0 0 1-.184 1.044L16.02 9.422a2.65 2.65 0 0 1-1.52.479H9.999a2.65 2.65 0 0 1-1.52-.479l-3.585-2.51a.75.75 0 0 1 .86-1.229l3.585 2.51c.193.135.424.208.66.208h4.502c.236 0 .467-.073.66-.208l3.586-2.51a.75.75 0 0 1 1.044.184"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.4 8.303a.75.75 0 0 1 .75.75v11.76a.75.75 0 0 1-1.5 0V9.052a.75.75 0 0 1 .75-.75M15.1 8.304a.75.75 0 0 1 .75.75v11.758a.75.75 0 0 1-1.5 0V9.054a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHexagonalCylinder1Outline;
