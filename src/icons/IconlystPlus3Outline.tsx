import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlus3Outline = ({
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
      d="M12.121 7.944a.75.75 0 0 1 .75.75v2.308h2.308a.75.75 0 0 1 0 1.5h-2.308v2.305a.75.75 0 0 1-1.5 0v-2.305h-2.31a.75.75 0 1 1 0-1.5h2.31V8.694a.75.75 0 0 1 .75-.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.399 5.709a3.18 3.18 0 0 1 1.592 2.759v6.564c0 1.138-.607 2.19-1.592 2.759l-5.686 3.282a3.18 3.18 0 0 1-3.184 0L4.843 17.79a3.18 3.18 0 0 1-1.593-2.758V8.468c0-1.139.607-2.19 1.593-2.76l5.686-3.282a3.19 3.19 0 0 1 3.184 0zm.092 2.759c0-.603-.321-1.16-.842-1.46l-5.686-3.283c-.521-.3-1.163-.3-1.685 0L5.593 7.008c-.521.3-.843.857-.843 1.46v6.564a1.68 1.68 0 0 0 .843 1.46l5.686 3.282c.52.301 1.163.301 1.684 0l5.686-3.283c.52-.3.842-.857.842-1.459z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlus3Outline;
