import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowel2TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.27 9.81c0 3.611 1.171 6.538 2.615 6.538S21.5 13.42 21.5 9.81c0-3.61-1.171-6.538-2.615-6.538S16.269 6.2 16.269 9.81"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.885 16.348H6.115C4.67 16.348 3.5 13.42 3.5 9.81c0-3.61 1.17-6.538 2.614-6.538h12.77"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.04 8.688a4.2 4.2 0 0 0 0 2.26M12.12 11.487h-1.132m5.368 0H14.63m-9.6 0H3.587m4.849 0H7.344M21.5 10.208v10.506l-15.213.014v-4.382"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTowel2TwoTone;
