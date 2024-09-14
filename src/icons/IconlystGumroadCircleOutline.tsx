import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGumroadCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.323 12.574h.004a1.112 1.112 0 1 1-.004 0m.004.75.004.75a.39.39 0 0 0-.003-.778h-.001a.39.39 0 0 0 0 .778zM15.397 6.844h.004a1.112 1.112 0 1 1-.004 0m.004.75.004.75a.39.39 0 0 0-.003-.778h-.001a.39.39 0 0 0 0 .778z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.26 8.852c0-.908.736-1.645 1.645-1.645h6.137a.75.75 0 0 1 0 1.5H8.905a.145.145 0 0 0-.145.145v6.658c0 .08.064.144.145.144h6.192c.08 0 .144-.064.144-.144v-3.704a.144.144 0 0 0-.144-.145H11.91a.144.144 0 0 0-.144.145v.974c0 .081.065.145.144.145h1.056a.75.75 0 0 1 0 1.5h-1.056c-.91 0-1.644-.738-1.644-1.645v-.974c0-.907.735-1.645 1.644-1.645h3.186c.91 0 1.644.738 1.644 1.645v3.704c0 .909-.736 1.644-1.644 1.644H8.905A1.644 1.644 0 0 1 7.26 15.51z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGumroadCircleOutline;
