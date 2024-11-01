export interface ICardApp {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  hasSelector?: boolean;
  fullContent?: boolean;
  component?: string;
  px?: string;
  py?: string;
  bgColor?: string;
  rounded?: string;
  position?: string;
  hasRing?: boolean;
}

type ICardAppFull = ICardApp;

export default function CardApp({
  children,
  className = "",
  hasSelector=false,
  component="li",
  fullContent = false,
  px = "px-4",
  py = "py-4",
  bgColor = "bg-white",
  rounded = "rounded-lg",
  position = "relative",
  hasRing = true,
  ...props
}: ICardAppFull) {

  const Component = component;
  const ring = hasRing ? 'ring-1 ring-black ring-opacity-5' : '';
  
  const dataSetClass = `shadow ${
    px + ' ' + 
    py + ' ' + 
    ring + ' ' + 
    rounded + ' ' + 
    position + '' + 
    bgColor + ''
  }`

  const classes = `flex ${
    fullContent ? "" : dataSetClass }`;

  return (
    <Component
      className={`${className}`}
      {...props}
    >
      <div className={classes}>
        {!fullContent ? (
            children
        ) : ('')}
      </div>
    </Component>
  )
}