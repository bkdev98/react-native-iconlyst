import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBathBulk = ({
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
      d="M19.695 12.7h.004c.993 0 1.801.807 1.801 1.8v.78c0 2.272-1.55 4.171-3.642 4.745l-1.722.195H8.002l-1.748-.16c-2.15-.535-3.754-2.467-3.754-4.78v-.78c0-.993.807-1.8 1.801-1.8h15.394"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="m5.467 21.123.787-1.064 1.748.161-1.329 1.795a.75.75 0 0 1-1.206-.892M17.465 22.015l-1.329-1.795 1.722-.195.813 1.098a.75.75 0 0 1-1.206.892" />
    </G>
    <Path
      fill={props.color}
      d="M19.695 6.149v6.55h-1.5v-6.55a1.27 1.27 0 0 0-.441-.96 1.3 1.3 0 0 0-1.023-.298l-1.867.289a1.27 1.27 0 0 0-1.085 1.259v.614c1.032.305 1.776 1.206 1.776 2.276 0 .469-.396.85-.882.85h-3.285c-.486 0-.882-.381-.882-.85v-.05c0-.612.252-1.191.709-1.63a2.54 2.54 0 0 1 1.064-.588v-.622c0-1.381.991-2.534 2.357-2.741l1.871-.29a2.79 2.79 0 0 1 2.227.646c.611.528.961 1.291.961 2.095"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBathBulk;
