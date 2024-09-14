import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMenu3Bold = ({
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
      fillRule="evenodd"
      d="M11.986 2.5c-3.26 0-6.08 1.85-7.47 4.56h-1.91c-.41 0-.75.34-.75.75 0 .21.08.39.22.52v.01c.14.14.33.22.53.22h3.37c.21 0 .39-.08.53-.22.14.14.22.32.22.52 0 .42-.34.75-.75.75H3.853c-.097 0-.18.069-.194.165-.051.337-.074.682-.083 1.034h-.97c-.41 0-.75.34-.75.75 0 .21.08.39.22.52v.01c.14.14.33.22.53.22h6.26c.21 0 .4-.08.53-.22a.743.743 0 0 1-.53 1.27H4.207c-.134 0-.23.131-.187.258q.17.497.396.962h-1.81c-.41 0-.75.34-.75.75 0 .21.08.39.22.52v.01c.14.14.33.22.53.22h2.64c.03 0 .06 0 .09-.01a.73.73 0 0 0 .44-.21.73.73 0 0 1 .19.731c-.025.087-.017.185.046.249a8.34 8.34 0 0 0 5.974 2.5 8.42 8.42 0 0 0 0-16.84M21.85 19.793l-1.983-1.98a1 1 0 0 0-1.413 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchMenu3Bold;
