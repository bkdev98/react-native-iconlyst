import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLikeSquareBroken = ({
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
      d="M9.9 10.63c.637 0 1.75-2.032 2.22-2.949.083-.163.125-.245.19-.307a.6.6 0 0 1 .21-.128c.084-.028.16-.028.31-.027.111.001.22.007.302.023.705.145 1.254 1.001.543 3.21-.025.079-.038.119-.03.149a.1.1 0 0 0 .048.067c.027.016.068.016.15.016h.57c1.071 0 1.606 0 1.971.219.333.201.578.52.685.895.117.409-.023.926-.302 1.96l-.26.965c-.148.548-.222.822-.377 1.026a1.3 1.3 0 0 1-.553.424c-.237.096-.52.096-1.088.096h-2.308c-.185 0-.277 0-.367-.013a1.3 1.3 0 0 1-.246-.058c-.087-.03-.169-.072-.333-.155L9.9 15.365M7.379 15.053c0 .422 0 .633.08.795a.76.76 0 0 0 .344.343c.162.08.373.08.795.08h.08c.423 0 .635 0 .796-.08a.77.77 0 0 0 .344-.343c.08-.162.08-.373.08-.795v-3.861c0-.422 0-.633-.08-.795a.77.77 0 0 0-.344-.343c-.161-.081-.373-.081-.795-.081h-.081c-.422 0-.633 0-.795.08a.76.76 0 0 0-.343.344c-.081.162-.081.373-.081.795v1.06"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.216 20.999c2.95 0 4.778-2.08 4.778-5.026V8.03c.01-2.944-1.824-5.026-4.772-5.026H7.784c-2.936 0-4.778 2.082-4.778 5.026v7.943c0 2.946 1.834 5.026 4.778 5.026h3.907"
    />
  </Svg>
);
export default IconlystThumbLikeSquareBroken;
