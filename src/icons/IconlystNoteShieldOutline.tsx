import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNoteShieldOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.202 4.033a3.37 3.37 0 0 0-3.369 3.37v9.76a3.37 3.37 0 0 0 3.37 3.37h2.591a.75.75 0 0 1 0 1.5H8.202a4.87 4.87 0 0 1-4.869-4.87v-9.76a4.87 4.87 0 0 1 4.87-4.87h7.096a4.87 4.87 0 0 1 4.87 4.87v3.364a.75.75 0 0 1-1.5 0V7.402a3.37 3.37 0 0 0-3.37-3.369z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.27 14.027a1.8 1.8 0 0 1 .368-.048c.134 0 .274.027.369.048.111.024.238.058.37.095.265.076.577.177.88.284s.608.222.857.33a5 5 0 0 1 .345.16c.075.04.229.122.348.243l-.534.527.532-.528.01.009c.056.056.195.196.275.418.07.194.075.396.076.54a20 20 0 0 1-.01.702c-.006.317-.012.739-.012 1.308 0 1.49-.903 2.471-1.69 3.038a6 6 0 0 1-1.549.799l-.032.01-.01.003-.004.002h-.002l-.219-.717-.218.717h-.002l-.003-.002-.01-.003-.033-.01-.108-.038a6.065 6.065 0 0 1-1.442-.761c-.786-.567-1.689-1.548-1.689-3.038 0-.57-.006-.992-.012-1.308l-.004-.205a19 19 0 0 1-.006-.498 1.6 1.6 0 0 1 .075-.54c.081-.225.223-.365.28-.421l.009-.009.53.531-.533-.528c.12-.12.272-.201.346-.24.102-.053.22-.108.345-.16.248-.108.553-.224.856-.33.304-.107.616-.209.88-.284.132-.038.259-.071.37-.096m.368 7.223-.218.717a.75.75 0 0 0 .436 0zm0-.799-.127-.054a4.6 4.6 0 0 1-.812-.461c-.591-.426-1.066-1.012-1.066-1.822 0-.58-.006-1.012-.012-1.335l-.005-.228-.006-.372q.062-.029.144-.064a14.41 14.41 0 0 1 1.558-.55 5 5 0 0 1 .326-.082l.048.01q.106.023.28.072a14 14 0 0 1 1.7.613c0 .093-.003.213-.006.378a81 81 0 0 0-.016 1.558c0 .81-.475 1.396-1.066 1.822a4.6 4.6 0 0 1-.94.515M8.46 9.928a.75.75 0 0 1 .75-.75h5.082a.75.75 0 0 1 0 1.5H9.21a.75.75 0 0 1-.75-.75m-.002 4.437a.75.75 0 0 1 .75-.75h2.654a.75.75 0 0 1 0 1.5H9.208a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNoteShieldOutline;
