import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBowling2Broken = ({
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
      d="M8.932 12.138c1.167-1.742 1.608-2.596 1.608-3.906s-1.608-3.023-.271-4.471c1.007-1.09 2.507-.936 3.463 0 1.315 1.404-.225 3.134-.27 4.471-.047 1.337.44 2.165 1.607 3.906 2.492 3.72.344 7.199-1.22 8.665a.75.75 0 0 1-.52.197h-2.657a.75.75 0 0 1-.519-.197c-1.187-1.112-2.71-3.383-2.288-6.038M16.822 6.59c.552-.034 1.112.189 1.538.605 1.053 1.125-.18 2.51-.217 3.58-.032.922.252 1.54.927 2.583M16.822 21h1.215a.6.6 0 0 0 .416-.159c.974-.912 2.23-2.797 1.804-4.99M7.178 20.999H5.963a.6.6 0 0 1-.416-.158c-1.253-1.174-2.973-3.959-.977-6.938.934-1.395 1.324-2.057 1.287-3.128-.037-1.07-1.27-2.455-.217-3.58.426-.416.986-.64 1.538-.606"
    />
  </Svg>
);
export default IconlystBowling2Broken;
