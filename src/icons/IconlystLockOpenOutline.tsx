import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockOpenOutline = ({
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
      fill={props.color}
      d="M14.95 22.716h-5.4a7.76 7.76 0 0 1-3.333-.369A3.77 3.77 0 0 1 4.46 20.59a7.7 7.7 0 0 1-.37-3.333v-2.132a7.74 7.74 0 0 1 .37-3.334c.37-.769.99-1.39 1.76-1.76a7.74 7.74 0 0 1 3.334-.37h5.396a7.7 7.7 0 0 1 3.333.37 3.76 3.76 0 0 1 1.757 1.758 7.7 7.7 0 0 1 .37 3.332v2.132a7.74 7.74 0 0 1-.37 3.334 3.76 3.76 0 0 1-1.756 1.757 7.8 7.8 0 0 1-3.334.373m-5.4-11.552a7.4 7.4 0 0 0-2.684.223c-.46.222-.832.593-1.054 1.053a7.4 7.4 0 0 0-.222 2.684v2.132c-.091.901-.016 1.81.222 2.684.222.46.594.833 1.054 1.055a7.4 7.4 0 0 0 2.684.221h5.4a7.4 7.4 0 0 0 2.685-.222c.46-.222.832-.593 1.054-1.053a7.4 7.4 0 0 0 .221-2.685v-2.132a7.4 7.4 0 0 0-.221-2.683 2.26 2.26 0 0 0-1.054-1.054 7.4 7.4 0 0 0-2.685-.223z"
    />
    <Path
      fill={props.color}
      d="M12.25 18.583a2.39 2.39 0 1 1 0-4.78 2.39 2.39 0 0 1 0 4.78m0-3.28a.89.89 0 1 0 0 1.78.89.89 0 0 0 0-1.78M7.814 11.166a.75.75 0 0 1-.75-.75v-2.11a5.189 5.189 0 0 1 10.087-1.674.75.75 0 1 1-1.416.493A3.69 3.69 0 0 0 8.56 8.313v2.105a.75.75 0 0 1-.747.748"
    />
  </Svg>
);
export default IconlystLockOpenOutline;
