import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileFavoriteOutline = ({
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
      d="M5.097 4.888c-.572.718-.872 1.846-.872 3.454v7.313c0 1.53.449 2.653 1.19 3.393.742.74 1.869 1.19 3.404 1.19h7.297c1.53 0 2.654-.449 3.394-1.19s1.188-1.863 1.188-3.393v-.005L20.725 11v-.002c0-1.647-.305-2.71-.862-3.362-.534-.625-1.43-1.02-2.994-1.02h-2.655a2.9 2.9 0 0 1-2.309-1.155v-.001l-.856-1.139a1.39 1.39 0 0 0-1.112-.556H8.062c-1.526 0-2.422.442-2.965 1.124m-1.174-.934c.912-1.144 2.31-1.69 4.14-1.69h1.874c.91 0 1.766.429 2.31 1.155l.856 1.138c.264.349.676.556 1.114.557h2.652c1.801 0 3.207.46 4.135 1.547.904 1.06 1.22 2.563 1.22 4.338v.004l-.026 4.652v.002c0 1.823-.54 3.365-1.627 4.452-1.088 1.088-2.63 1.628-4.456 1.628H8.82c-1.828 0-3.374-.54-4.463-1.627-1.09-1.087-1.631-2.63-1.631-4.455V8.342c0-1.743.316-3.28 1.198-4.388"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.471 10.241a2.74 2.74 0 0 1 2.02-.143h.004c1.665.538 2.144 2.309 1.704 3.686v.002c-.355 1.1-1.252 1.99-1.961 2.567a11 11 0 0 1-1.369.942l-.026.014-.007.005-.003.001c-.001 0-.002.001-.36-.658l-.361.657h-.002l-.002-.002-.008-.004-.025-.014-.09-.052a10.95 10.95 0 0 1-1.284-.897c-.71-.577-1.609-1.468-1.954-2.562-.44-1.38.043-3.148 1.707-3.684l.006-.002c.67-.21 1.39-.154 2.011.144m.002 6.416-.361.657a.75.75 0 0 0 .72.002zm.001-.876c.219-.141.511-.343.818-.592.653-.53 1.262-1.19 1.479-1.862.266-.835-.082-1.589-.735-1.8-.381-.12-.795-.05-1.113.188a.75.75 0 0 1-.897.002 1.25 1.25 0 0 0-1.114-.19c-.654.213-1.002.968-.736 1.8l.002.004c.206.656.811 1.315 1.47 1.85.31.252.605.457.826.6"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileFavoriteOutline;
