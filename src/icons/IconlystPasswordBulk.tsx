import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M16.334 2H7.665C4.276 2 2 4.378 2 7.917v8.167C2 19.622 4.276 22 7.665 22h8.668C19.723 22 22 19.622 22 16.084V7.917C22 4.377 19.723 2 16.334 2"
        opacity={0.4}
      />
      <Path d="M8.844 9.399c1.17 0 2.15.78 2.47 1.85h5.7c.41 0 .75.34.75.75v1.85c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75v-1.1h-1.33v1.1c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75v-1.1h-2.12a2.58 2.58 0 0 1-2.47 1.85c-1.44 0-2.61-1.16-2.61-2.6 0-1.43 1.17-2.6 2.61-2.6m0 1.5c-.61 0-1.11.49-1.11 1.1a1.105 1.105 0 0 0 2.21 0c0-.61-.5-1.1-1.1-1.1" />
    </G>
  </Svg>
);
export default IconlystPasswordBulk;
