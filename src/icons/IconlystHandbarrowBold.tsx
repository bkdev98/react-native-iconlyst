import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandbarrowBold = ({
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
      d="M7.257 6.926h7.778c.495 0 .822-.525.588-.962-.618-1.16-1.98-2.958-4.476-2.958-2.498 0-3.86 1.798-4.479 2.958-.233.437.094.962.59.962"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.592 15.592h.84l.103 3.37zM6.71 18.068a1.43 1.43 0 0 1-2.857 0c0-.75.583-1.36 1.32-1.417l-.541.932a.75.75 0 1 0 1.298.753l.575-.993c.127.214.205.459.205.725M20.897 5.796h-2.073c-.753 0-1.394.513-1.56 1.246l-.003.005-.161.718H5.841a1.6 1.6 0 0 0-1.486 2.197l1.922 4.786-.284.489a3 3 0 0 0-.711-.098 2.93 2.93 0 0 0-2.929 2.929 2.93 2.93 0 0 0 2.929 2.928 2.93 2.93 0 0 0 2.928-2.928c0-.828-.349-1.573-.903-2.106l.215-.37h5.519c.003.01 0 .022.003.033l1.181 4.22a1.43 1.43 0 0 0 2.398.612 1.42 1.42 0 0 0 .405-1.034l-.107-4.196a.7.7 0 0 0 .092-.221l1.712-7.631a.1.1 0 0 1 .099-.08h2.073a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHandbarrowBold;
