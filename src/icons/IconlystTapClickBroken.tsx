import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapClickBroken = ({
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
      d="M12.93 21.482c-2.084.125-4.257-.398-5.276-1.665-1.173-1.459-2.085-3.229-2.66-4.816-.308-.851.144-1.769.99-2.093a1.736 1.736 0 0 1 2.05.635l1.135 1.648V6.087a1.587 1.587 0 0 1 3.174-.024l.063 4.106c2.221.212 5.437.097 6.335 2.521.904 2.44.014 5.668-1.569 7.252"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.017 9.498C7.93 8.859 7.195 7.637 7.195 6.235c0-.48.086-.938.243-1.36M14.237 7a3.74 3.74 0 0 1-1.696 2.469M9.158 2.895a3.4 3.4 0 0 1 1.595-.395c1.222 0 2.3.646 2.94 1.632"
    />
  </Svg>
);
export default IconlystTapClickBroken;
