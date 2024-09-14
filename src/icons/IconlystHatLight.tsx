import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHatLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.52 14.628c1.357.495 1.71 1.397 1.73 2.983.038 3.164-1.971 3.648-9.25 3.731-7.279-.083-9.288-.567-9.25-3.73.02-1.59.374-2.493 1.738-2.987"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.368 7.233c2.99 1.187 5.146 4.472 5.146 7.553-5.915 1.078-9.1 1.088-15.028 0 0-3.081 2.157-6.366 5.147-7.553M18.414 18.332l-.06-.043c-.702-.5-1.84-.5-2.541 0-.702.5-1.84.5-2.542 0s-1.839-.5-2.54 0-1.84.5-2.542 0-1.84-.5-2.541 0l-.06.043"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.965 4.525a1.162 1.162 0 0 1 2.072 0v0a.1.1 0 0 0 .097.055v0a1.162 1.162 0 0 1 1.037 1.795v0a.1.1 0 0 0 0 .112v0a1.162 1.162 0 0 1-1.037 1.795v0a.1.1 0 0 0-.097.056v0a1.162 1.162 0 0 1-2.072 0v0a.1.1 0 0 0-.097-.056v0a1.162 1.162 0 0 1-1.036-1.795v0a.1.1 0 0 0 0-.112v0a1.162 1.162 0 0 1 1.036-1.795v0c.04.003.078-.02.097-.055"
    />
  </Svg>
);
export default IconlystHatLight;
