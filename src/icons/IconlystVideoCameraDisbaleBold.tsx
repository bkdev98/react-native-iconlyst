import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCameraDisbaleBold = ({
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
      d="M23.406 7.062a1.796 1.796 0 0 0-2.52-.25L19.66 7.818c-.258.21-.376.534-.36.866q.003.057.003.116v6.4q0 .063-.003.123c-.017.331.101.654.358.864l1.214.999c.316.26.72.404 1.134.404.986 0 1.791-.802 1.794-1.79l.012-7.597a1.8 1.8 0 0 0-.406-1.14"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.91 15.91c-.032.232-.313.305-.475.135L6.635 4.619c-.166-.176-.065-.453.176-.454h6.803c2.6 0 4.35 1.83 4.35 4.55v6.4q0 .413-.053.794M18.944 20.915c-.14.14-.33.2-.51.2-.2 0-.4-.07-.55-.23l-1.81-1.91c-.68.44-1.51.69-2.46.69h-6.79c-2.6 0-4.35-1.83-4.35-4.55v-6.4c0-1.24.37-2.28 1.02-3.06l-1.43-1.51c-.29-.3-.27-.78.03-1.06.29-.27.74-.27 1.03 0l14.02 14.83 1.8 1.91.03.03c.29.3.27.78-.03 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoCameraDisbaleBold;
