import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraEditBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.935 16.143a3.81 3.81 0 0 1-2.847 1.272 3.85 3.85 0 0 1-3.843-3.844c0-1.089.463-2.127 1.273-2.846a.75.75 0 1 1 .996 1.121 2.3 2.3 0 0 0-.77 1.725 2.346 2.346 0 0 0 2.344 2.344c.66 0 1.29-.28 1.728-.77a.75.75 0 1 1 1.119.998m3.828-4.25a3.87 3.87 0 0 1-2.23 1.221l-.004.001-1.714.286q-.175.03-.352.03c-.55 0-1.087-.21-1.49-.59a2.17 2.17 0 0 1-.663-1.807l.187-1.743c.09-.813.422-1.559.96-2.165l1.833-2c.116-.126.104-.325-.038-.42a2.66 2.66 0 0 0-1.487-.466H9.854c-.995 0-1.912.541-2.392 1.411-.423.763-.604 1.01-.666 1.078-.251.263-.59.415-.933.43A3.567 3.567 0 0 0 2.3 10.717v5.642a4.613 4.613 0 0 0 4.607 4.607h9.788A4.61 4.61 0 0 0 21.3 16.36v-5.644a3.5 3.5 0 0 0-.11-.856c-.054-.215-.32-.265-.47-.102z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.23 9.587c.027-.236.125-.455.275-.625l3.413-3.723a.324.324 0 0 1 .459-.018l.72.666c.132.123.14.329.016.464l-3.384 3.692a1.13 1.13 0 0 1-.654.36l-.955.225zm-1.49-.163-.113 1.043a1.44 1.44 0 0 0 .447 1.209 1.43 1.43 0 0 0 1.233.376l1.016-.17h.002a2.62 2.62 0 0 0 1.516-.834l3.375-3.681a1.83 1.83 0 0 0-.1-2.58l-.721-.668a1.83 1.83 0 0 0-2.581.104l-3.422 3.734a2.62 2.62 0 0 0-.652 1.467"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraEditBold;
