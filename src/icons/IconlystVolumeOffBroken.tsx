import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeOffBroken = ({
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
      d="M7.714 16.287c-.177-.103-.345-.168-.495-.177-1.296-.094-1.8.056-2.51-.55-.764-.654-.708-2.399-.708-3.677 0-.814-.023-1.818.159-2.608M14.533 9.467c-.065-2.612-.298-3.918-1.157-4.618-2.003-1.183-4.565 2.293-5.934 2.76M14.533 13.917c-.037 2.874-.261 4.273-1.157 5-.98.58-2.09.047-3.134-.708"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.001 20 3.713-3.713 6.82-6.82L20 4"
    />
  </Svg>
);
export default IconlystVolumeOffBroken;
