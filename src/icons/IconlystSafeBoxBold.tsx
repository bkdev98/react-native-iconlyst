import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSafeBoxBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.733 12.535a.75.75 0 1 1-1.06-1.06l1.54-1.54c.141-.14.109-.377-.075-.453a3 3 0 0 0-1.136-.229 3.077 3.077 0 0 0-3.078 3.07 3.084 3.084 0 0 0 3.078 3.082 3.084 3.084 0 0 0 3.077-3.082c0-.473-.112-.92-.306-1.32-.083-.172-.31-.197-.446-.061z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.002 16.906a4.586 4.586 0 0 1-4.577-4.582 4.58 4.58 0 0 1 4.577-4.57 4.58 4.58 0 0 1 4.577 4.57 4.586 4.586 0 0 1-4.577 4.582m7.626-5.332h1.51c.174 0 .313-.15.293-.324a9.45 9.45 0 0 0-2.003-4.832.292.292 0 0 0-.436-.02l-1.067 1.07a.747.747 0 0 1-1.281-.528.75.75 0 0 1 .218-.53l1.071-1.074a.292.292 0 0 0-.021-.436 9.45 9.45 0 0 0-4.84-2.008.292.292 0 0 0-.322.294v1.518a.75.75 0 0 1-1.5 0V3.186a.292.292 0 0 0-.323-.293 9.45 9.45 0 0 0-4.838 2.006.292.292 0 0 0-.02.436l1.07 1.075a.749.749 0 1 1-1.063 1.058L5.008 6.397a.292.292 0 0 0-.436.02 9.44 9.44 0 0 0-2.003 4.833.292.292 0 0 0 .293.323h1.512a.75.75 0 0 1 0 1.5H2.862a.292.292 0 0 0-.293.324 9.45 9.45 0 0 0 2.008 4.839c.11.137.313.144.436.02l1.063-1.065a.75.75 0 1 1 1.063 1.059l-1.065 1.067a.292.292 0 0 0 .021.436 9.45 9.45 0 0 0 4.832 2.002.292.292 0 0 0 .323-.294v-1.506a.75.75 0 0 1 1.5 0v1.506c0 .175.15.313.323.294a9.45 9.45 0 0 0 4.833-2.003.292.292 0 0 0 .02-.436l-1.063-1.065a.75.75 0 0 1 0-1.062.75.75 0 0 1 1.06 0l1.065 1.066a.292.292 0 0 0 .436-.02 9.44 9.44 0 0 0 2.007-4.838.292.292 0 0 0-.294-.324h-1.51a.75.75 0 0 1 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSafeBoxBold;