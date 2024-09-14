import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVimeoTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.731 18.088c3.785 5.75 12.306-7.2 11.165-11.668-.206-.827-.74-1.542-1.585-1.785-1.56-.475-3.397.101-4.462 1.313-.546.61-.934 1.349-1.214 2.115-.123.278.119.603.427.52 1.515-.387 2.272.585 1.638 1.944-.604 1.186-1.357 2.202-2.184 3.249"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.73 18.088c-1.283-1.95-1.82-5.035-2.706-7.562-.536-1.489-1.58-1.478-2.74-.645-.23.177-.555.271-.768-.002-.126-.161-.287-.555-.412-.716a.494.494 0 0 1 .11-.707c1.089-.951 1.892-1.779 3.062-2.63 2.24-1.58 4.324-1.315 4.866 1.017.168.72.986 8.396 2.374 6.932"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystVimeoTwoTone;
