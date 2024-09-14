import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderBrokencurved = ({
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
      d="M7.446 14.725h9.593M7.612 21.062c-3.108-.571-4.972-2.244-4.972-7.048V7.949c0-2.442 1.25-4.539 3.622-5.026s4.173-.319 5.67.488c1.498.808 1.07 2 2.608 2.876 1.54.876 4.017-.44 5.635 1.305 1.694 1.828 1.685 4.634 1.685 6.422 0 6.797-3.807 7.336-9.61 7.336"
    />
  </Svg>
);
export default IconlystFolderBrokencurved;
