import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartBagLike3Broken = ({
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
      d="M11.699 20.57h5.981c2.34 0 3.797-1.65 3.797-3.988v-6.306c0-2.338-1.457-3.989-3.796-3.989H7.271c-2.332 0-3.794 1.651-3.794 3.99v6.305c0 2.337 1.455 3.988 3.794 3.988h1.12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.476 16.492s-2.437-1.328-3.006-3.096c-.353-1.103.06-2.365 1.218-2.738a1.98 1.98 0 0 1 1.788.302 1.99 1.99 0 0 1 1.785-.302c1.158.373 1.574 1.635 1.221 2.738-.169.536-.517 1.034-.918 1.468M15.837 6.272v-.623c0-1.226-.994-2.22-2.22-2.22h-2.28c-1.226 0-2.22.994-2.22 2.22v.623M3.477 13.1h5.871M15.606 13.1h5.871"
    />
  </Svg>
);
export default IconlystHeartBagLike3Broken;
