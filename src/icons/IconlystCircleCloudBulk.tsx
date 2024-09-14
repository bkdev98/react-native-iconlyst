import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleCloudBulk = ({
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
      d="M13 2c-5.238 0-9.5 4.261-9.5 9.5S7.762 21 13 21s9.5-4.262 9.5-9.5S18.239 2 13 2"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.93 15.443c-.423.17-.858.256-1.256.256H10.14a3.3 3.3 0 0 1-1.22-.247 3.1 3.1 0 0 1-1.846-2.828c0-1.543.974-2.727 2.396-3.02.29-1.325 1.403-2.838 3.44-2.838s3.15 1.513 3.44 2.838c1.421.293 2.395 1.477 2.395 3.02 0 1.214-.712 2.32-1.815 2.819m-2.004-5.16a.75.75 0 0 0 .743.75c.762.008 1.575.429 1.575 1.59 0 .626-.367 1.197-.903 1.44a1.9 1.9 0 0 1-.667.136h-5.535c-.2 0-.446-.052-.631-.126a1.59 1.59 0 0 1-.935-1.45c0-1.161.814-1.582 1.575-1.59a.75.75 0 0 0 .744-.75c0-.4.359-2.017 2.017-2.017s2.017 1.618 2.017 2.018"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCircleCloudBulk;
