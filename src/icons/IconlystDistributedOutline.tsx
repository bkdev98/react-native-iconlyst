import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDistributedOutline = ({
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
      d="M8.025 8.115c.525-.563 1.263-.865 2.102-.865h3.749c.84 0 1.579.302 2.103.866.518.558.77 1.31.77 2.12v3.533c0 .807-.252 1.559-.77 2.116-.524.563-1.262.865-2.103.865h-3.748c-.841 0-1.58-.302-2.104-.864-.52-.557-.774-1.309-.774-2.117v-3.533c0-.811.256-1.564.775-2.121m1.097 1.023c-.217.234-.372.599-.372 1.098v3.533c0 .497.154.86.37 1.093.212.227.538.388 1.008.388h3.748c.47 0 .794-.16 1.004-.387.216-.232.37-.596.37-1.094v-3.533c0-.501-.154-.867-.37-1.1-.21-.225-.534-.386-1.004-.386h-3.748c-.468 0-.793.16-1.006.388"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.758 10.209c.31.29.466.689.466 1.112v1.36c0 .423-.155.823-.467 1.113a1.6 1.6 0 0 1-1.095.407H11.38c-.391 0-.787-.123-1.093-.407a1.5 1.5 0 0 1-.466-1.113v-1.36c0-.423.154-.823.465-1.113.306-.285.702-.41 1.094-.41h1.282c.394 0 .79.126 1.096.41m-1.035 1.096a.3.3 0 0 0-.06-.006H11.38a.3.3 0 0 0-.059.006v1.391a.3.3 0 0 0 .06.005h1.281a.3.3 0 0 0 .061-.005v-1.391M10.386 5.25a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V6a.75.75 0 0 1 .75-.75M13.614 18.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 1 1 1.5 0v2a.75.75 0 0 1-.75.75M13.614 2.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M10.386 21.75a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-.75.75M19.442 12a.75.75 0 0 1-.75.75H16a.75.75 0 0 1 0-1.5h2.693a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.442 12a.404.404 0 1 0 .808 0 .404.404 0 0 0-.808 0m.404 1.904a1.904 1.904 0 1 1 0-3.807 1.904 1.904 0 0 1 0 3.807M4.558 12a.75.75 0 0 1 .75-.75H8a.75.75 0 0 1 0 1.5H5.308a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.558 12a.404.404 0 1 0-.808 0 .404.404 0 0 0 .808 0m-.404-1.904a1.904 1.904 0 1 1 0 3.807 1.904 1.904 0 0 1 0-3.807"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDistributedOutline;
