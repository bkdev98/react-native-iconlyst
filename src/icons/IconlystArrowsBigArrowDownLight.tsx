import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBigArrowDownLight = ({
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
      d="m11.296 20.684.56-.498zm-6.132-6.899-.56.499zm.352-.783v-.75zm3.66 0v.75a.75.75 0 0 0 .75-.75zm0-5.609h-.75zm.94-.941v-.75zm3.767 0v.75zm.942.941h-.75zm0 5.609h-.75c0 .414.335.75.75.75zm3.659 0v.75zm.352.783-.56-.498zm-6.132 6.899.56.498zm-.847-.498-6.132-6.899-1.121.997 6.132 6.898zm-6.34-6.434h3.658v-1.5H5.516zm4.408-.75V7.393h-1.5v5.609zm.192-5.8h3.766v-1.5h-3.766zm3.957.191v5.609h1.5V7.393zm.75 6.359h3.66v-1.5h-3.66zm3.451-.465-6.132 6.899 1.121.996 6.132-6.898zm.209.465a.28.28 0 0 1-.209-.465l1.121.997c.7-.788.141-2.032-.912-2.032zm-4.601-6.55c.106 0 .192.085.192.191h1.5c0-.934-.758-1.691-1.692-1.691zm-3.958.191c0-.106.086-.191.192-.191v-1.5c-.934 0-1.692.757-1.692 1.691zm-4.2 5.894a.28.28 0 0 1-.209.465v-1.5c-1.053 0-1.612 1.244-.912 2.032zm5.01 7.895a1.69 1.69 0 0 0 2.53 0l-1.122-.996a.192.192 0 0 1-.286 0z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9.193 3h5.614"
    />
  </Svg>
);
export default IconlystArrowsBigArrowDownLight;
