import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopMoodyBulk = ({
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
      d="M19.83 13.388v-.07c0-1.845-1.245-3.426-2.922-3.822l.005-.04c.217-1.874-.873-3.495-3.08-4.57l-.218-.103c-.402-.192-.856-.408-1.315-.488a.52.52 0 0 0-.455.173.52.52 0 0 0-.1.486c.133.447.297 1.587-1.089 2.524a3.68 3.68 0 0 0-1.359 1.964c-1.805.299-3.169 1.93-3.169 3.877v.074c-1.554.506-2.64 2.008-2.64 3.735 0 1.952 1.405 3.454 3.695 3.925 1.671.253 3.967.357 6.124.357 2.563 0 4.93-.147 5.82-.366 1.55-.382 3.361-1.637 3.361-3.916 0-1.741-1.094-3.246-2.659-3.74"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.898 14.218c.435 0 .85-.114 1.168-.322a.75.75 0 0 0 .22-1.038.753.753 0 0 0-1.038-.22c-.09.06-.61.06-.703 0a.75.75 0 0 0-.814 1.26c.32.206.733.32 1.167.32M10.428 17.058c.651.837 1.6 1.319 2.603 1.319a.75.75 0 1 0 0-1.5c-.536 0-1.053-.27-1.417-.74a.75.75 0 0 0-1.186.92M10.73 12.639a.751.751 0 0 0-.819 1.258c.318.207.733.32 1.168.32s.85-.114 1.17-.32a.751.751 0 0 0-.82-1.258c-.09.059-.616.055-.7 0"
    />
  </Svg>
);
export default IconlystPoopMoodyBulk;
