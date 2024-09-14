import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQRCodeBrokensharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M10.306 3.366v6.807H3.5V3.365h3.132M21 20.866h-6.806V14.06H21v3.72M16.625 3.366h-2.43v4.12M21 5.067v-1.7h-1.7M21 7.741v2.43h-1.7M14.195 10.172h2.22M16.517 5.731v2.22h1.83M18.944 5.721v.01M6.902 6.72v.097M6.902 17.414v.097M17.597 17.414v.097M3.5 20.866V14.06h6.806v6.806l-3.291.045"
    />
  </Svg>
);
export default IconlystQRCodeBrokensharp;
