import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLikeSquareTwoTone = ({
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
      d="M10.4 10.626c.637 0 1.75-2.032 2.219-2.949.084-.163.126-.245.19-.307a.6.6 0 0 1 .21-.128c.085-.028.16-.028.31-.027.112 0 .221.007.303.023.705.145 1.254 1.001.543 3.21-.025.08-.038.119-.03.15a.1.1 0 0 0 .048.066c.027.016.068.016.15.016h.57c1.07 0 1.606 0 1.971.22.334.2.578.52.685.894.117.409-.023.926-.302 1.96l-.26.965c-.148.548-.222.822-.377 1.026a1.3 1.3 0 0 1-.553.424c-.237.096-.521.096-1.088.096H12.68c-.185 0-.277 0-.367-.012a1.3 1.3 0 0 1-.246-.06c-.087-.029-.169-.07-.333-.154L10.4 15.36M9.18 9.969h-.082c-.422 0-.633 0-.795.08a.77.77 0 0 0-.343.344c-.081.162-.081.373-.081.795v3.86c0 .423 0 .634.08.796a.77.77 0 0 0 .344.343c.162.08.373.08.795.08h.081c.422 0 .634 0 .795-.08a.77.77 0 0 0 .344-.343c.08-.162.08-.373.08-.795v-3.861c0-.422 0-.633-.08-.795a.77.77 0 0 0-.344-.343c-.161-.081-.373-.081-.795-.081"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.722 3H8.284C5.348 3 3.506 5.082 3.506 8.026v7.943c0 2.946 1.834 5.026 4.778 5.026h8.432c2.95 0 4.778-2.08 4.778-5.026V8.026C21.504 5.082 19.67 3 16.722 3"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystThumbLikeSquareTwoTone;
