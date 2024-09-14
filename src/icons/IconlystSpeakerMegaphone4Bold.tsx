import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphone4Bold = ({
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
      d="m18.89 12.315.01-4.59c.81.46 1.35 1.33 1.35 2.29 0 .98-.55 1.85-1.36 2.3m-8.85 7.47c-.38.15-.87.01-1.12-.34-.13-.17-.24-.4-.33-.71-.36-1.12-.8-2.61-1.2-3.93l-.01-.03c.85.2 1.79.45 2.79.77.31 2.28.4 3.05.42 3.3.04.44-.17.8-.55.94m8.82-13.7c-.13-1.31-.7-2.36-1.59-2.95-.84-.55-1.87-.64-2.83-.22-2.31.99-4.47 1.67-6.31 2.13v1.56l-.01 3.15c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75v-2.81l.01-1.54c-.58.13-1.11.23-1.58.31-1.7.3-2.79 1.76-2.8 3.73v1.1c0 .98.27 1.84.76 2.5.49.65 1.19 1.09 2.04 1.24q.315.06.66.12l.25.83c.39 1.33.84 2.82 1.19 3.95.15.47.34.86.56 1.15.46.64 1.24 1.01 2.02 1.01.29 0 .58-.05.85-.16.99-.37 1.6-1.37 1.51-2.46-.02-.33-.13-1.2-.33-2.66q1.29.465 2.67 1.05c.41.17.85.26 1.28.26.62 0 1.23-.18 1.76-.52.89-.59 1.42-1.57 1.42-2.64v-.28a4.14 4.14 0 0 0 2.86-3.92c0-1.8-1.21-3.4-2.89-3.93"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpeakerMegaphone4Bold;
