import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewBulk = ({
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
      d="M2.73 5.03c.81-.867 1.963-1.356 3.337-1.356h11.866c1.377 0 2.532.49 3.34 1.357.804.864 1.227 2.061 1.227 3.416v7.104c0 1.355-.423 2.553-1.228 3.417-.808.867-1.963 1.357-3.34 1.357H6.067c-1.377 0-2.532-.49-3.34-1.357-.804-.864-1.227-2.062-1.227-3.417V8.447c0-1.355.426-2.553 1.23-3.416"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.093 9.832a.75.75 0 0 0-1.5 0v2.105L5.746 9.501a.75.75 0 0 0-1.348.453v4.34a.75.75 0 0 0 1.5 0v-2.109l1.847 2.436a.75.75 0 0 0 1.348-.453zM10.617 9.121a.75.75 0 0 0-.75.75v4.257c0 .415.336.75.75.75h2.118a.75.75 0 0 0 0-1.5h-1.368v-.627h.942a.75.75 0 0 0 0-1.5h-.942v-.63h1.368a.75.75 0 0 0 0-1.5zM15.523 9.776a.75.75 0 0 0-1.476.266l.76 4.212a.75.75 0 0 0 1.416.188l.769-1.623.77 1.623a.75.75 0 0 0 1.415-.188l.76-4.212a.75.75 0 0 0-1.476-.266l-.345 1.913-.447-.942a.75.75 0 0 0-1.355 0l-.446.94z"
    />
  </Svg>
);
export default IconlystNewBulk;
