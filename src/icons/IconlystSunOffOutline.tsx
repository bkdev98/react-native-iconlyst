import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunOffOutline = ({
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
      fill={props.color}
      d="M9.975 5.389c-.29 0-.57-.17-.69-.46l-.63-1.49a.75.75 0 0 1 .4-.98c.38-.16.82.02.98.4l.63 1.49a.75.75 0 0 1-.69 1.04M16.854 5.339c-.09 0-.19-.02-.28-.06a.75.75 0 0 1-.41-.98l.61-1.5a.751.751 0 1 1 1.39.57l-.61 1.5c-.12.29-.4.47-.7.47M5.135 10.289c-.09 0-.19-.02-.28-.06l-1.5-.61a.75.75 0 1 1 .57-1.39l1.5.61c.38.16.57.59.41.98-.12.29-.4.47-.7.47M3.695 17.808a.75.75 0 0 1-.29-1.44l1.49-.63c.38-.16.82.02.98.4a.75.75 0 0 1-.4.98l-1.49.63c-.1.04-.19.06-.29.06M10.555 18.549c-.19 0-.38-.07-.53-.22l-.84-.84a6.265 6.265 0 0 1 0-8.85 6.2 6.2 0 0 1 4.42-1.83c1.67 0 3.24.65 4.42 1.83l.84.84c.29.29.29.77 0 1.06s-.77.29-1.06 0l-.84-.84c-.9-.9-2.09-1.39-3.36-1.39s-2.46.49-3.36 1.39c-1.85 1.85-1.85 4.87 0 6.73l.84.84c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
    />
    <Path
      fill={props.color}
      d="M7.435 21.668c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l14.04-14.04c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-14.04 14.04c-.15.15-.34.22-.53.22"
    />
  </Svg>
);
export default IconlystSunOffOutline;
