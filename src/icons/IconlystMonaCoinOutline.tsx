import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonaCoinOutline = ({
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
      fillRule="evenodd"
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12c0-5.385 4.365-9.75 9.75-9.75S22 6.615 22 12s-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.687 6.198c.3-.051.601.083.763.34l1.286 2.048.206-.04a6.8 6.8 0 0 1 2.643 0h.002l.179.036 1.284-2.044a.75.75 0 0 1 1.367.237l.744 3.34a4.08 4.08 0 0 1 1.464 3v.01c0 1.4-.812 2.59-1.968 3.399-1.159.81-2.72 1.288-4.407 1.288s-3.248-.477-4.407-1.288c-1.156-.81-1.968-2-1.968-3.399v-.033A4.13 4.13 0 0 1 7.34 10.12l.744-3.346a.75.75 0 0 1 .604-.577m.464 2.684-.406 1.826a.75.75 0 0 1-.292.444 2.63 2.63 0 0 0-1.078 1.99c.006.77.454 1.542 1.328 2.153.878.614 2.13 1.018 3.547 1.018s2.67-.404 3.547-1.018c.875-.612 1.323-1.385 1.328-2.156a2.59 2.59 0 0 0-1.075-1.988.75.75 0 0 1-.295-.447l-.406-1.823-.589.938a.75.75 0 0 1-.784.336l-.683-.138h-.001a5.3 5.3 0 0 0-2.059 0h-.002l-.713.14a.75.75 0 0 1-.778-.338z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.618 10.666a.75.75 0 0 1-.106 1.056l-.645.526a.75.75 0 0 1-.949-1.161l.645-.527a.75.75 0 0 1 1.055.106M13.882 10.666a.75.75 0 0 1 1.055-.106l.645.527a.75.75 0 1 1-.949 1.161l-.645-.526a.75.75 0 0 1-.106-1.056M10.594 12.423a.75.75 0 0 1 1.056.098l.588.71.617-.717a.75.75 0 0 1 1.137.98l-1.197 1.388a.75.75 0 0 1-1.145-.01l-1.155-1.393a.75.75 0 0 1 .099-1.056"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonaCoinOutline;
