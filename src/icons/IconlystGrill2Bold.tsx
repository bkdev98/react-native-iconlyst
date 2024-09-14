import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrill2Bold = ({
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
      d="M12.693 2.47a.75.75 0 0 0-1.061 1.06.36.36 0 0 1 0 .512 1.864 1.864 0 0 0 0 2.634.75.75 0 0 0 1.06-1.06.363.363 0 0 1 0-.514 1.86 1.86 0 0 0 0-2.632M9.193 5.103a.75.75 0 0 0-1.062-1.06 1.863 1.863 0 0 0 0 2.633.75.75 0 1 0 1.062-1.06.363.363 0 0 1 0-.513M16.192 4.042a.75.75 0 0 0-1.06.002 1.863 1.863 0 0 0 0 2.632.75.75 0 0 0 1.062-1.06.363.363 0 0 1 0-.513.75.75 0 0 0-.002-1.06"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.245 15.71a7.87 7.87 0 0 0 4.62-7.165.5.5 0 0 0-.5-.5H4.635a.5.5 0 0 0-.5.5 7.87 7.87 0 0 0 4.565 7.14l-1.687 5.079a.75.75 0 1 0 1.423.473l.435-1.31h6.195l.435 1.31a.75.75 0 1 0 1.423-.473l-.6-1.807-.01-.033zm-1.42.486a8 8 0 0 1-1.825.213c-.65 0-1.28-.079-1.884-.227l-.746 2.245h5.197z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGrill2Bold;
