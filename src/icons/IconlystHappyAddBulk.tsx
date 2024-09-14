import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyAddBulk = ({
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
      d="M14.974 19.252c0-3 2.4-5.4 5.4-5.4.562 0 .87.154.963-.434.083-.52.127-1.016.127-1.566 0-5.2-4.3-9.5-9.5-9.5s-9.5 4.3-9.5 9.5 4.3 9.5 9.5 9.5c1.023 0 1.96-.173 2.89-.439a.28.28 0 0 0 .208-.28c-.015-.429-.088-.869-.088-1.381"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.736 17.749h-1.4v-1.4c0-.5-.3-.8-.8-.8s-.8.4-.8.8v1.4h-1.5c-.5 0-.8.3-.8.8s.4.8.8.8h1.5v1.5c0 .5.4.8.8.8s.8-.4.8-.8v-1.5h1.4c.5 0 .8-.3.8-.8s-.4-.8-.8-.8M11.495 16.425c-1.96 0-3.55-1.39-3.55-3.1 0-.28.23-.5.5-.5h6.1c.28 0 .5.22.5.5 0 1.71-1.59 3.1-3.55 3.1M7.495 9.345a.97.97 0 0 1 .98-.97c.53 0 .97.44.97.97 0 .54-.44.98-.97.98-.54 0-.98-.44-.98-.98M14.275 8.665a.977.977 0 0 1 1.67.68c0 .54-.44.98-.97.98-.54 0-.98-.44-.98-.98 0-.25.1-.5.28-.68"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHappyAddBulk;
