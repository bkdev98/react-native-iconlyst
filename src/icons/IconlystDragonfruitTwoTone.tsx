import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDragonfruitTwoTone = ({
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
      d="M8.832 6.344c.7-.356 2.225-1.522 2.722-3.344.34 1.245 1.158 2.183 1.866 2.766"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.768 8.28c-.7-.355-2.225-1.521-2.722-3.343"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.938 11.64c.465-.236 1.477-1.01 1.807-2.22.33 1.21 1.342 1.984 1.807 2.22M8.318 16.282c.372-.189 1.182-.808 1.447-1.777.264.969 1.074 1.588 1.447 1.777M15.207 17.4c.372-.188 1.183-.808 1.447-1.777.264.969 1.075 1.589 1.447 1.777"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.384 6.608c.7-.355 2.213-1.555 2.71-3.378.29 3.485 4.118 5.856 4.374 9.343.473 6.438-4.802 9.624-9.811 8.014-2.84-.913-4.864-3.346-4.712-5.679.122-1.865-.206-3.718-.443-4.293C5 12.438 6.64 13.367 7.34 13.722"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.24 12.807c-.217-1.577-.396-4.879 1.806-7.87"
    />
  </Svg>
);
export default IconlystDragonfruitTwoTone;
