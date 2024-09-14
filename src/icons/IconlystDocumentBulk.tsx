import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentBulk = ({
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
        d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83v10.33C3 20.26 4.77 22 7.81 22h8.381C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2"
        opacity={0.4}
      />
      <Path d="M8.08 15.74h7.84c.399.04.7.38.7.79 0 .399-.301.74-.7.78H8.08c-.3.04-.59-.11-.75-.36a.795.795 0 0 1 .75-1.21m7.84-4.561a.781.781 0 0 1 0 1.561H8.08a.78.78 0 0 1 0-1.561zM11.069 6.65c.431 0 .781.35.781.779 0 .441-.35.791-.781.791H8.08a.78.78 0 0 1 0-1.56v-.01z" />
    </G>
  </Svg>
);
export default IconlystDocumentBulk;
