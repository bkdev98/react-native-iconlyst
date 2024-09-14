import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallMissedBold = ({
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
    <G fill={props.color} fillRule="evenodd">
      <Path
        fillRule="nonzero"
        d="m19.337 5.918 2.404-2.413a.88.88 0 0 0 .26-.627.88.88 0 0 0-.26-.627.903.903 0 0 0-1.249 0L18.09 4.664l-2.405-2.413a.903.903 0 0 0-1.249 0 .887.887 0 0 0 0 1.254l2.404 2.413-2.404 2.412a.887.887 0 0 0 0 1.255.903.903 0 0 0 1.249 0l2.405-2.414 2.403 2.414a.88.88 0 0 0 1.249 0 .88.88 0 0 0 .26-.628.88.88 0 0 0-.26-.627z"
      />
      <Path d="M11.032 12.972c3.989 3.988 4.894-.625 7.434 1.913 2.448 2.448 3.856 2.938.753 6.04-.388.312-2.857 4.07-11.534-4.605C-.993 7.644 2.762 5.172 3.074 4.784c3.11-3.11 3.592-1.695 6.04.753 2.54 2.54-2.071 3.447 1.918 7.435" />
    </G>
  </Svg>
);
export default IconlystCallMissedBold;
