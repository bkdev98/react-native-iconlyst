import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLikeCircleBroken = ({
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
      d="M9.9 10.626c.637 0 1.75-2.032 2.22-2.949.082-.163.124-.245.19-.307a.6.6 0 0 1 .208-.128c.086-.028.161-.028.31-.027.112.001.222.007.304.023.705.145 1.254 1.001.543 3.21-.025.08-.038.12-.03.15a.1.1 0 0 0 .048.066c.026.016.067.016.15.016h.57c1.071 0 1.606 0 1.971.22.333.2.578.52.685.894.116.41-.023.926-.302 1.96l-.26.965c-.148.548-.222.822-.377 1.026a1.3 1.3 0 0 1-.553.423c-.238.097-.52.097-1.088.097h-2.308c-.185 0-.277 0-.368-.013a1.3 1.3 0 0 1-.246-.058c-.086-.03-.168-.072-.333-.155L9.9 15.361M7.379 13.755v1.294c0 .422 0 .633.08.795a.76.76 0 0 0 .344.343c.162.08.373.08.795.08h.08c.423 0 .635 0 .796-.08a.77.77 0 0 0 .344-.343c.08-.162.08-.373.08-.795v-3.861c0-.422 0-.633-.08-.795a.77.77 0 0 0-.344-.343c-.161-.081-.373-.081-.795-.081h-.081c-.422 0-.633 0-.795.08a.76.76 0 0 0-.343.344c-.081.162-.081.373-.081.795"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 1 1 3.421-.673"
    />
  </Svg>
);
export default IconlystThumbLikeCircleBroken;
