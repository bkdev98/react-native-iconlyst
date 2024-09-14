import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWeight2Bulk = ({
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
      <Path d="M6.364 11.628a1.59 1.59 0 0 0-2.221-.021 36 36 0 0 0-1.19 1.192c-.615.653-.601 1.518.024 2.164.214.222.594.6.832.837a.3.3 0 0 1 .001.425l-.633.635a1.397 1.397 0 0 0 0 1.976l1.987 1.987c.544.545 1.43.545 1.976 0l.633-.635a.3.3 0 0 1 .425 0c.224.225.572.574.78.779.692.679 1.519.716 2.229.07q.631-.571 1.205-1.202a1.61 1.61 0 0 0-.054-2.215 2605 2605 0 0 0-5.994-5.992M20.966 8.978c-.205-.207-.553-.555-.778-.779a.3.3 0 0 1 0-.425l.634-.634a1.397 1.397 0 0 0 0-1.976l-1.986-1.987a1.397 1.397 0 0 0-1.976 0l-.634.634a.3.3 0 0 1-.426-.001 68 68 0 0 0-.838-.833c-.646-.625-1.511-.639-2.163-.023-.409.385-.803.784-1.192 1.189a1.59 1.59 0 0 0 .02 2.221q2.99 3.002 5.992 5.993a1.61 1.61 0 0 0 2.215.055 17 17 0 0 0 1.204-1.205c.646-.71.608-1.537-.073-2.229" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.685 9.138a.384.384 0 0 0-.536.007l-3.031 3.032a.383.383 0 0 0 0 .542l2.202 2.149a.38.38 0 0 0 .532-.003l3.043-3.042a.376.376 0 0 0-.007-.536z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWeight2Bulk;
