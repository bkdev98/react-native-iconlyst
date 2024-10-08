import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheersBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M19.842 21.19c.05.41-.24.78-.66.83l-1.7.19c-.01 0-.02 0-.03.01h-.04l-1.7.19c-.03.01-.06.01-.09.01-.37 0-.7-.28-.74-.67-.05-.41.24-.78.66-.83l.99-.11-.36-3.13c.14.03.28.04.42.04a2.891 2.891 0 0 0 1.07-.2l.36 3.12.99-.11c.43-.04.79.24.83.66M12.53 9.359s.014-.47.002-.488c0-.49.02-.83.03-.96.03-.36.31-.65.67-.69l4.95-.56c.35-.04.69.17.8.52.1.33.65 2.16.82 4.25-.44.12-.95.15-1.49.1-1.38-.13-2.97-.71-4.27-1.35-.51-.25-.97-.51-1.35-.75zM4.15 20.404a.743.743 0 0 0 .627.855l1.69.256c.01 0 .02 0 .03.011l.04.002 1.692.256c.03.012.06.013.09.014a.746.746 0 0 0 .765-.641.744.744 0 0 0-.627-.855l-.985-.148.482-3.114a2 2 0 0 1-.421.024 4 4 0 0 1-.34-.035 2.9 2.9 0 0 1-.721-.207l-.482 3.104-.985-.15c-.428-.056-.8.21-.855.628M11.919 8.866s.005-.47.016-.488c.02-.489.013-.83.008-.96a.76.76 0 0 0-.643-.716L6.376 5.95a.75.75 0 0 0-.82.49 21.5 21.5 0 0 0-.984 4.213c.434.137.942.187 1.484.158 1.385-.076 2.996-.593 4.32-1.182.52-.23.989-.47 1.378-.696z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.285 5.833a.75.75 0 0 1-.552-.242l-.947-1.029A.75.75 0 0 1 9.89 3.547l.948 1.028a.75.75 0 0 1-.552 1.258M14.623 6.422a.75.75 0 0 1-.424-1.369l1.153-.79a.75.75 0 1 1 .848 1.238l-1.154.79a.75.75 0 0 1-.423.131M12.606 5.32a.75.75 0 0 1-.744-.853l.191-1.384a.751.751 0 0 1 1.486.205l-.19 1.385a.75.75 0 0 1-.743.647M12.532 9.359c0 .4.02 1.272.06 1.742.15 1.89.6 4.17 1.81 5.61.45.54 1.08.88 1.77.97.14.03.28.04.42.04a2.891 2.891 0 0 0 1.07-.2c.66-.25 1.2-.73 1.52-1.35.47-.94.65-2.07.67-3.22.02-.51 0-1.02-.05-1.52-.44.12-.95.15-1.49.1-1.38-.13-2.97-.71-4.27-1.35-.51-.25-.97-.51-1.35-.75zM11.917 8.866c-.016.4-.07 1.27-.128 1.738-.224 1.883-.763 4.144-2.028 5.535a2.76 2.76 0 0 1-1.806.9 2 2 0 0 1-.422.024 2.884 2.884 0 0 1-1.061-.242 2.83 2.83 0 0 1-1.466-1.408c-.433-.958-.57-2.094-.544-3.244 0-.51.04-1.019.11-1.517.435.137.943.187 1.485.16 1.384-.077 2.995-.595 4.319-1.184.519-.229.989-.47 1.378-.696z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCheersBulk;
