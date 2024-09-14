import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJiraSoftwareOutline = ({
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
      fill={props.color}
      d="M12.74 21.44c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l7.95-7.95q.09-.09.09-.21a.28.28 0 0 0-.08-.2l-7.96-7.96a.3.3 0 0 0-.21-.09s-.13.01-.21.09c-.5.5-.78 1.16-.78 1.87s.27 1.37.77 1.87l3.89 3.89a.75.75 0 0 1 0 1.06l-3.15 3.14c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06L14.08 12l-3.36-3.36a4.11 4.11 0 0 1-1.21-2.93c0-1.11.43-2.15 1.22-2.93a1.786 1.786 0 0 1 2.54 0l7.95 7.95c.33.32.53.79.53 1.27s-.19.92-.52 1.27l-7.96 7.95c-.15.15-.34.22-.53.22"
    />
    <Path
      fill={props.color}
      d="M12 21.752c-.46 0-.92-.17-1.27-.52l-7.95-7.95a1.786 1.786 0 0 1 0-2.54l7.95-7.95c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-7.95 7.95c-.08.08-.09.16-.09.21s.01.13.09.21l7.95 7.95c.12.12.31.12.42 0 .5-.5.77-1.16.77-1.87s-.27-1.37-.77-1.87l-3.89-3.89a.75.75 0 0 1 0-1.06l3.14-3.14c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.61 2.61 3.36 3.36c.78.78 1.21 1.82 1.21 2.93s-.43 2.15-1.22 2.93c-.35.35-.81.52-1.27.52z"
    />
  </Svg>
);
export default IconlystJiraSoftwareOutline;
